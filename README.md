# Restaurant Reviews App
A reviews app for local resturants.

### Step 1 - Download All Required Files
- Download all files and folders from the repository.
- You can download a zipped file using the gree clone / download button in the top right corne, or if you prefer simply clone the repository
- You shold save all these file in the same folder. Feel free to create you own or use an existing folder.
- Remember where you saved your files as you will need this later.

### Step 2 - Opening the app locally
- Open your terminal and navigate to the root directory of the app

- In this folder, set up a HTTP server to serve up the site files on your local computer. Python has some simple tools to do this. you dont need to know Python to do this.

- For most people, it's already installed on your computer and you can check the version that you have by typing python -V or py -V into the terminal.

-If you don't have Python you can get the latest version here: https://www.python.org/downloads

- Once Python is installed and you have have navigated to root project folder using the terminal, check the version of Python you have: `python -V`.

-If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`.

- I had to use `py` rather than `python3` when creating my server. So my command line looked like this `project-root/py -m http.server 8000`

- With the server running, visit the site: http://localhost:8000, and view the app
