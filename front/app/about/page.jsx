"use client"
import { useTranslation } from "react-i18next";
import * as Images from "../../assets/index";

const Page = () => {
	const { t } = useTranslation("global");

	return (
		<>
			<section className="bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] overflow-hidden">
				<div className="container mx-auto max-w-full px-4">
					<div className="-mx-4 flex flex-wrap items-center justify-between">
						<div className="w-full px-4 lg:w-6/12">
							<div className="-mx-3 flex items-center sm:-mx-4">
								<div className="w-full px-3 sm:px-4 bg-pink-200 rounded-t-[50px]">
									<div className="relative z-10">
										<img
											src="https://res.cloudinary.com/dzuvxegtt/image/upload/v1727304005/Remove-bg.ai_1727301581975_ktrlpy.png"
											alt={t("Page.sociologist_alt")}
											className="w-full rounded-2xl"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full px-4 lg:w-1/2 xl:w-5/12">
							<div className="mt-10 lg:mt-0">
								<div className="p-4 text-neutral-600 leading-8">
									<span className="text-4xl font-extrabold mt-8 capitalize lg:text-5xl">
										{t("Page.meet_our")} <span className="text-[#83cc61]">{t("Page.sociologist")}</span>
									</span>

									<h1 className="my-8 text-2xl md:text-3xl pl-2 border-l-4 italic font-bold border-pink-200">
										{t("Page.name")}
									</h1>
									<p className="text-lg mb-4 leading-relaxed">
										— {t("Page.description1")}
									</p>
									<p className="text-lg mb-4 leading-relaxed">
										— {t("Page.description2")}
									</p>
									<p className="text-lg mb-4 leading-relaxed">
										— {t("Page.description3")}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="relative isolate overflow-hidden bg-white px-4 py-24 sm:py-32 lg:overflow-visible lg:px-0">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
						<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
							<div className="lg:pr-4">
								<div className="lg:max-w-lg">
									<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
										{t("Page.vision_title")} <span className="text-[#296747]">{t("Page.vision_highlight")}</span>
									</h1>

									<div>
										<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
											{t("Page.purpose_question")} <span className="text-[#83cc61]">{t("Page.purpose_highlight")}</span> {t("Page.purpose_question_end")}
										</h2>
										<p className="mt-6 text-neutral-600 leading-relaxed text-base lg:text-lg">
											{t("Page.purpose_description")}
										</p>
									</div>

									<div>
										<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
											{t("Page.audience_question")} <span className="text-[#83cc61]">{t("Page.audience_highlight")}</span>
										</h2>
										<p className="mt-6 text-neutral-600 leading-relaxed text-base lg:text-lg">
											{t("Page.audience_description")}
										</p>
									</div>

									<div>
										<h2 className="mt-16 text-2xl font-bold tracking-tight capitalize text-gray-900">
											{t("Page.objectives_question")} <span className="text-[#83cc61]">{t("Page.objectives_highlight")}</span>
										</h2>
										<p className="mt-6 text-neutral-600 leading-relaxed text-base lg:text-lg">
											{t("Page.objectives_description")}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="hidden -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:flex">
							<img
								alt={t("Page.sociologist_alt")}
								src="https://res.cloudinary.com/dzuvxegtt/image/upload/v1727304005/Remove-bg.ai_1727301581975_ktrlpy.png"
								className="w-[48rem] max-w-none rounded-xl bg-pink-200 shadow-xl transform scale-x-[-1] sm:w-[57rem]"
							/>
						</div>

						<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
							<div className="lg:pr-4">
								<div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
									<p className="text-neutral-600 leading-relaxed text-base lg:text-lg">
										{t("Page.safety_description")}
									</p>

									<p className="mt-8 text-neutral-600 leading-relaxed text-base lg:text-lg">
										{t("Page.dedicated_description")}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Page;
