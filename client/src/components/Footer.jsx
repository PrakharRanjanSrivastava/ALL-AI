export default function Footer() {
    return (
        <footer className="w-full  bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat  text-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <img alt="" className="h-11"
                        src="favicon.svg" />
                </div>
                <p className="justify-center text-center mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600">
                    Experience the power of <spam className="text-blue-600">ALL AI</spam>. <br/> Transform your content creation with our suite of premium AI tools. Write articles, generate images, enhance your workflow.
                </p>
            </div>
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="https://prebuiltui.com">ALL AI</a> ©2026. All rights reserved.
                </div>
            </div>
        </footer>
    );
};