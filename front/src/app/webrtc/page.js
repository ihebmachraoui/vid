"use client";
import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const VideoChat = () => {
	const userName = `Rob-${Math.floor(Math.random() * 100000)}`;
	const password = "x";

	const [offers, setOffers] = useState([]);
	const [didIOffer, setDidIOffer] = useState(false);
	const localVideoRef = useRef(null);
	const remoteVideoRef = useRef(null);
	const [socket, setSocket] = useState(null);
	const [peerConnection, setPeerConnection] = useState(null);
	const [localStream, setLocalStream] = useState(null);
	const [remoteStream, setRemoteStream] = useState(null);

	useEffect(() => {
		const newSocket = io.connect("https://localhost:3100", {
			auth: { userName, password },
		});

		setSocket(newSocket);

		newSocket.on("availableOffers", (offers) => {
			setOffers(offers);
		});

		newSocket.on("newOfferAwaiting", (offers) => {
			setOffers(offers);
		});

		newSocket.on("answerResponse", (offerObj) => {
			addAnswer(offerObj);
		});

		newSocket.on("receivedIceCandidateFromServer", (iceCandidate) => {
			addNewIceCandidate(iceCandidate);
		});

		return () => newSocket.disconnect();
	}, [userName, password]);

	const call = async () => {
		await fetchUserMedia();
		await createPeerConnection();

		try {
			const offer = await peerConnection.createOffer();
			await peerConnection.setLocalDescription(offer);
			setDidIOffer(true);
			socket.emit("newOffer", offer);
		} catch (err) {
			console.log(err);
		}
	};

	const answerOffer = async (offerObj) => {
		await fetchUserMedia();
		await createPeerConnection(offerObj);

		const answer = await peerConnection.createAnswer({});
		await peerConnection.setLocalDescription(answer);

		offerObj.answer = answer;
		const offerIceCandidates = await socket.emitWithAck("newAnswer", offerObj);
		offerIceCandidates.forEach((c) => peerConnection.addIceCandidate(c));
	};

	const addAnswer = async (offerObj) => {
		await peerConnection.setRemoteDescription(offerObj.answer);
	};

	const fetchUserMedia = () => {
		return new Promise(async (resolve, reject) => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: true,
				});
				localVideoRef.current.srcObject = stream;
				setLocalStream(stream);
				resolve();
			} catch (err) {
				console.log("aaaaaaaaaaaa", err);
				reject();
			}
		});
	};

	const createPeerConnection = (offerObj) => {
		return new Promise(async (resolve, reject) => {
			const newPeerConnection = new RTCPeerConnection({
				iceServers: [
					{
						urls: [
							"stun:stun.l.google.com:19302",
							"stun:stun1.l.google.com:19302",
						],
					},
				],
			});

			const newRemoteStream = new MediaStream();
			remoteVideoRef.current.srcObject = newRemoteStream;

			localStream
				.getTracks()
				.forEach((track) => newPeerConnection.addTrack(track, localStream));

			newPeerConnection.onicecandidate = (e) => {
				if (e.candidate) {
					socket.emit("sendIceCandidateToSignalingServer", {
						iceCandidate: e.candidate,
						iceUserName: userName,
						didIOffer,
					});
				}
			};

			newPeerConnection.ontrack = (e) => {
				e.streams[0]
					.getTracks()
					.forEach((track) => newRemoteStream.addTrack(track));
			};

			setPeerConnection(newPeerConnection);
			setRemoteStream(newRemoteStream);

			if (offerObj) {
				await newPeerConnection.setRemoteDescription(offerObj.offer);
			}
			resolve();
		});
	};

	const addNewIceCandidate = (iceCandidate) => {
		peerConnection.addIceCandidate(iceCandidate);
	};

	return (
		<div>
			<div>
				<video ref={localVideoRef} autoPlay playsInline muted></video>
				<video ref={remoteVideoRef} autoPlay playsInline></video>
			</div>
			<button id="call" onClick={call}>
				Call
			</button>
			<div id="answer">
				{offers.map((o, i) => (
					<button
						key={i}
						className="btn btn-success col-1"
						onClick={() => answerOffer(o)}>
						Answer {o.offererUserName}
					</button>
				))}
			</div>
		</div>
	);
};

export default VideoChat;
