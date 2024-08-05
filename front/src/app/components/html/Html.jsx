import React from "react";
import * as images from "../../../assets/index";
const Html = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto text-left">
        <main className="py-12">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                HTML Basics for Beginners
              </h2>
              <a
                href="#"
                className="py-2 text-gray-500 inline-flex items-center justify-center mb-2"
              >
                Web Development
              </a>
            </div>

            <img src={images.HTML.src} className="w-full object-cover lg:rounded" />
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              <h3 className="font-semibold text-base lg:text-3xl text-black">
                Introduction
              </h3>
              <p className="pb-6">
                Welcome to the world of web development! HTML (Hypertext Markup
                Language) is the cornerstone of web page creation. In this
                comprehensive beginner's lecture, we will delve into the
                fundamental concepts of HTML, and by the end, you'll be
                well-equipped to start your journey in web development.
              </p>
              <h3 className="font-semibold text-base lg:text-3xl text-black">
                What is HTML ?
              </h3>
              <p className="pb-6">
                HTML is a markup language used for creating the structure and
                content of web pages. It comprises elements, which are defined
                by HTML tags. These elements work together to create a
                structured and visually appealing web page.
              </p>
              <h3 className="font-semibold text-base lg:text-3xl text-black">
                Setting Up Your Environment
              </h3>
              <p className="pb-6">
                Before we embark on our HTML journey, let's ensure you have the
                right tools: Text Editor: For writing HTML code, you'll need a
                text editor. You can use a simple one like Notepad (Windows) or
                TextEdit (Mac), but many web developers prefer feature-rich code
                editors like Visual Studio Code or Sublime Text for their
                convenience and advanced features. Web Browser: To preview your
                web pages, you need a web browser. Common choices include Google
                Chrome, Mozilla Firefox, and Microsoft Edge. Now that you're set
                up let's explore the core structure of an HTML document.
              </p>
              <div className="border-l-4 border-[#ff007b] pl-4 mb-6 rounded">
                <p className="italic lg:text-lg">
                  Basic Structure of an HTML Document
                </p>
                <span className="lg:text-sm px-2 p-1 font-medium bg-pink-100 rounded ">
                  Every HTML document follows a similar structure:
                </span>

                <img src={images.HTML_STRUCTURE.src} />
              </div>
              <div className="py-8 ">
            
                <span className="font-medium">• &lt;!DOCTYPE html&gt;</span> :
                This declaration defines the document type and version of HTML
                being used (HTML5 in this case).
             
              <br />•{" "}
              <span className="font-medium">
                &lt;html&gt;</span> : The root element that contains all other HTML
                elements.
             
              <br />• {" "}
              <span className="font-medium">
               
                &lt;head&gt;</span> : Contains metadata about the document, such as the
                character encoding, title, and links to external resources.
              
              <br />•{" "}
              <span className="font-medium">
                &lt;meta charset="UTF-8"&gt;</span> : Specifies the character encoding,
                ensuring proper display of text.
             
              <br />•{" "}
              <span className="font-medium">
                &lt;title&gt;</span> : Sets the title of the webpage, displayed in the
                browser's tab or window.
             
              <br />•{" "}
              <span className="font-medium">
                &lt;link rel="stylesheet" type="text/css" href="styles.css"&gt;</span> 
                : Links to an external stylesheet (CSS) for styling your page.
             
                <br /> •{" "}
              <span className="font-medium">
                &lt;body&gt;</span> : Contains the visible content of the webpage,
                including text, images, and other media.
              
              </div>
             
              <h3 className="font-semibold text-base lg:text-3xl text-black">
                HTML Elements and Tags
              </h3>
              <p className="pb-6">
                HTML elements, represented by tags, define the structure of your
                webpage. Here are a few fundamental elements:
              </p>
              <div className="pb-6">
              <div className="py-4">
  • <span className="font-medium">
    &lt;h1&gt; to &lt;h6&gt; : Headings (from largest to smallest)
  </span>
  <p className="text-xs lg:text-base py-4 bg-pink-600 text-center text-white rounded-xl">
  &lt;h1&gt;Welcome to My Web Page&lt;/h1&gt;
  </p>
</div>
                <div className="py-4">
  • <span className="font-medium">
    &lt;p&gt; : Paragraph
  </span>
  <p className="text-xs lg:text-base py-4 bg-pink-600 text-center text-white rounded-xl">
  &lt;p&gt;This is a simple example of a paragraph.&lt;/p&gt;
  </p>
</div>
                <div className="py-4">
  • <span className="font-medium">
    &lt;a&gt; : Anchor (for hyperlinks)
  </span>
  <p className="text-xs lg:text-base py-4 bg-pink-600 text-center text-white rounded-xl">
  &lt;a href="https://www.example.com"&gt;Visit rbktunisia.com"&lt;/a&gt;
  </p>
</div>
                <div className="py-4">
  • <span className="font-medium">
    &lt;img&gt; : Image
  </span>
  <p className="text-xs lg:text-base py-4 bg-pink-600 text-center text-white rounded-xl">
  &lt;img src="image.jpg" alt="Image Description" /&gt;
  </p>
</div>
                <div className="py-4">
  • <span className="font-medium">
    &lt;ul&gt; : Unordered list
  </span>
  <p className="py-4 bg-pink-600 text-white rounded-xl">
    &nbsp;&nbsp;&lt;ul&gt;<br/>
    &nbsp;&nbsp; &nbsp;&nbsp;&lt;li&gt; Item 1 &lt;li/&gt;<br/>
    &nbsp;&nbsp; &nbsp;&nbsp;&lt;li&gt; Item 2 &lt;li/&gt;<br/>
    &nbsp;&nbsp;&lt;/ul&gt;
  </p>
</div>

<div className="py-4">
  • <span className="font-medium">
    &lt;ol&gt; : Ordered list
  </span>
  <p className="py-4 bg-pink-600 text-white rounded-xl">
    &nbsp;&nbsp;&lt;ol&gt;<br/>
    &nbsp;&nbsp; &nbsp;&nbsp;&lt;li&gt; First item &lt;li/&gt;<br/>
    &nbsp;&nbsp; &nbsp;&nbsp;&lt;li&gt; Second item &lt;li/&gt;<br/>
    &nbsp;&nbsp;&lt;/ol&gt;
  </p>
</div>

<div className="py-4">
  • <span className="font-medium">
    &lt;li&gt; : List item
  </span>
  <p className="py-4 bg-pink-600 text-center text-white rounded-xl">
    &lt;li&gt; Item &lt;/li&gt;
  </p>
</div>

<div className="py-4">
  • <span className="font-medium">
    &lt;div&gt; : Division (used for grouping content)
  </span>
  <p className="py-4 bg-pink-600 text-center text-white rounded-xl">
    &lt;div&gt; Content goes here &lt;/div&gt;
  </p>
</div>

<div className="py-4">
  • <span className="font-medium">
    &lt;span&gt; : Inline division (used for styling or scripting)
  </span>
  <p className="py-4 bg-pink-600 text-center text-white rounded-xl">
    &lt;span&gt; Some Text &lt;/span&gt;
  </p>
</div>

<div className="py-4">
  • <span className="font-medium">
    &lt;br&gt; : Line break
  </span>
  <p className="py-4 bg-pink-600 text-center text-white rounded-xl">
    &lt;p&gt; This is the first line. &lt;br&gt; This is the second line &lt;/p&gt;
  </p>
</div>

<div className="py-4">
  • <span className="font-medium">
    &lt;hr&gt; : Horizontal rule (a thematic break)
  </span>
  <p className="py-4 bg-pink-600 text-center text-white rounded-xl">
    &lt;p&gt; Some content above &lt;br&gt; Some content below &lt;/p&gt;
  </p>
</div>
               
              </div>

              <h3 className="font-semibold text-base lg:text-3xl text-black">
                Conclusion
              </h3>
              <p className="pb-6">
              This is just the beginning of your HTML journey. With these basics, you can create simple web pages. To learn more, explore additional HTML tags and attributes and study CSS (Cascading Style Sheets) to style your web pages.

Remember to practice and experiment to reinforce your learning. As you progress, you'll be able to create more complex and dynamic web pages.

              </p>
              <p className="pb-6 text-[#ff007b] font-semibold">
              Good luck with your HTML coding adventure!
              </p>
            </div>

            <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
              <div className="p-4 border-t border-b md:border md:rounded">
                <div className="flex py-2">
                  <img
                    src={images.moenesAvatar.src}
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">
                      {" "}
                      Moenes Mannai{" "}
                    </p>
                    <p className="font-semibold text-gray-600 text-xs">
                      {" "}
                      Full Stack Web Developer{" "}
                    </p>
                  </div>
                </div>
                <button className="px-2 py-1 text-white bg-[#ff007b] flex w-full items-center justify-center rounded">
                 <a href="https://www.linkedin.com/in/moenes-mannai-1ab4a0297/">Follow</a>
                 
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Html;
