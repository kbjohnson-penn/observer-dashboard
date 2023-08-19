****

Setting Up the Development Environment

**Backend Setup**

*Setup a Virtual Environment*:

cd backend/

python3 -m venv venv

source venv/bin/activate

*Install Required Packages*:

pip install -r requirements.txt

*Setup the Database*:

python manage.py makemigrations

python manage.py migrate

*Run the Django Development Server*:

python manage.py runserver

*Note*: 

The Django server will be available at http://127.0.0.1:8000/.

****

**Frontend Setup**

*Navigate to the Frontend Directory*:


cd frontend/
*Install Required Packages*:

npm install
*Run the React Development Server*:

npm start
*Note*: The React app will be live at http://localhost:3000/.

****