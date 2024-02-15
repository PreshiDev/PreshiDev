import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Precious | Django | Python | ReactJS | and React Native Developer</title>
        <meta name="description" content="Discover the portfolio of Precious, a skilled developer specializing in Django, Python, ReactJS, and React Native. Explore projects, skills, and expertise to find the perfect fit for your web and mobile development needs." />
        <meta name="keywords" content="Precious, developer, Django, Python, ReactJS, React Native, portfolio, web development, mobile development, precious gift uwhuseba, preshie, prexxie" />
        <meta name="author" content="Precious" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Precious | Django | Python | ReactJS | and React Native Developer" />
        <meta property="og:description" content="Explore the portfolio of Precious, a proficient developer specializing in Django, Python, ReactJS, and React Native. Learn more about my journey in the About Me section and get in touch through the Contact Me page." />
        <meta property="og:image" content="https://preshie.com.ng/images/precious.png" />
        {/* Meta tag for my portfolio logo */} 
        <meta property="og:image" content="https://preshie.com.ng/images/P.G-DarkBackground.png"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://preshie.com.ng" />
      </Head>
      <body className="bg-black overflow-hidden">
        <Main />
        <NextScript />

        <div className="hidden md:block absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-pink-500 to-orange-500 animate-pulse"></div>
        <div className="hidden md:block absolute inset-y-0 right-0 w-1 bg-gradient-to-l from-orange-500 to-pink-500 animate-pulse"></div>

        <div className="block md:hidden absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse"></div>
        <div className="block md:hidden absolute inset-x-0 bottom-0 h-1 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 animate-pulse"></div>
      </body>
    </Html> 
  );
}
