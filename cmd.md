cls
cd frontend
npm run dev

cd backend

py -m venv venv
venv\scripts\activate

py manage.py runserver

py manage.py makemigrations
py manage.py createsuperuser
py manage.py migrate
py manage.py runserver






django-admin startproject backend
cd backend
py manage.py startapp accounts
py manage.py startapp roles
py manage.py startapp listing
py manage.py startapp company
py manage.py startapp candidates
py manage.py startapp professional
py manage.py startapp lkprofessionals

python.exe -m pip install --upgrade pip
pip install django djangorestframework djoser  djangorestframework-simplejwt pillow



pip install django-authority 
pip install django-guardian


pip freeze

npx create-react-app frontend

cd frontend
npm start


mkdir src/components src/pages src/layouts


npx create-next-app@latest frontend
cd frontend
