Basic Guide:
This document serves as a very basic guide to get our code running so you can start generating business workflow diagrams.

To start, install Visual Studio 2019. Although any IDE should suffice, this is the IDE we have been using for development and we have found it
to be intuitive and easy-to-interact-with for the purposes of our project. 

We will also need to install "node.js", which we can download from "nodejs.org". Please be sure to install the latest version "12.12.0"
from the "Current" tab - located at this URL: "https://nodejs.org/en/download/current/".

The default options for installation of "node.js" should direct you to install within "C:/", which is correct. There should be no need to
install any options not pre-selected for you within the default installation. 

A critical part of our code is "node-canvas". 
A detailed guide on installation of canvas can be found here: https://github.com/Automattic/node-canvas/wiki/Installation:-Windows
To make it easier, I will summarize the steps within this guide as best as I can below:

(IMPORTANT: Please be sure that any utilities used to execute commands from the command line are run as an administrator. 
For example, if running an install command through the default command line - run the command line as administrator. 
If running an install command through the Visual Studio, please be sure to run the IDE as an administrator. 
If not run with admin privileges, some commands will not install successfully.)

Through the command line (as administrator) enter "npm install -g node-gyp", and then "npm install --global --production windows-build-tools"

Next, install the GTK2 bundle: 
(Windows 64 version can be found here: http://ftp.gnome.org/pub/GNOME/binaries/win64/gtk+/2.22/gtk+-bundle_2.22.1-20101229_win64.zip)
Extract the contents to "C:\GTK".

(Optional for JPEG file support, unnecessary to generate PNG files) 
Now install libjpeg-turbo for jpeg support from here: http://sourceforge.net/projects/libjpeg-turbo/files/
This can also be installed to it's default location of "C:\libjpeg-turbo64".

Now that we have installed all dependencies, we can install node-canvas by entering the command "npm install canvas" from the command line
as an administrator.

Now, open the master folder containing our code "project_10-master" in Visual Studio. In the Solution Explorer sidebar, open the corresponding 
subdirectory. Within, you should see files like "Shape.js", "colorMap.js", and "main.js". Right click on "main.js" and click on
"Open Developer Command Prompt". 

Before we run main.js, we need to install some dependencies first. Again, please be sure that you are running the IDE as an administrator.
These are:
Nodemon (npm install --save-dev nodemon)
Esm (npm install --save esm)
Fabric (npm install --save-dev fabric)

Enter each of the above "npm install" commands within the terminal. 

After installation of these dependencies is complete, enter "npm test" or "npm start". "npm test" will not exit on generation of the .png, and leaves 
the option to edit code and restart execution by entering "rs". This is very handy for debugging. For a simple, single run - you can instead use
"npm start". After execution, you should see that a file named "helloworld2.png" has been created within the directory containing "main.js". 
Opening the file, you will be able to see the rendered business flow diagram.

If you are running into errors when executing "npm start" or "npm test", try deleting the "package-lock.json" file and the "node_modules" folder from the solution. After they are both deleted, try running "npm install" again. After that completes, try running "npm start" and "npm test" again. If erros continue, you may be missing the installation of some dependencies. 
