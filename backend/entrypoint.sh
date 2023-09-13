#!/bin/bash
set -e

# Function to wait for MySQL
wait_for_mysql() {
    echo "Waiting for mysql..."
    while ! mysqladmin ping -h"$MYSQL_HOST" -P"$MYSQL_PORT" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" --silent; do
        sleep 1
    done
}

# If the command passed is "python manage.py runserver" or similar, wait for MySQL
if [ "$1" = "python" ] && [ "$2" = "manage.py" ]; then
    wait_for_mysql

    # Run migrations
    echo "Running migrations..."
    python manage.py migrate
fi

# Check if superuser already exists, and if not, create one
echo "Checking for existing superuser..."
if [ "$(echo "from django.contrib.auth import get_user_model; User = get_user_model(); print(User.objects.filter(is_superuser=True).count())" | python manage.py shell)" = "0" ]; then
    echo "Creating superuser..."
    echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('$DJANGO_SUPERUSER_USERNAME', '$DJANGO_SUPERUSER_EMAIL', '$DJANGO_SUPERUSER_PASSWORD')" | python manage.py shell
fi

# Start the main command
exec "$@"