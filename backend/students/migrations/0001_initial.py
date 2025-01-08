# Generated by Django 5.1.4 on 2024-12-28 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('email', models.EmailField(blank=True, default='test@test.com', max_length=254, null=True, unique=True)),
                ('phone', models.CharField(blank=True, default='077123456', max_length=15, null=True)),
                ('date_of_birth', models.DateField(blank=True, default=0.0006027122049221496, null=True)),
                ('gender', models.CharField(blank=True, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')], default='Male', max_length=20)),
                ('address', models.TextField(blank=True, default='Jaffna', null=True)),
                ('nationality', models.CharField(blank=True, default='Sri Lankan', max_length=100, null=True)),
                ('degree_type', models.CharField(choices=[('Certificate', 'Certificate'), ('Diploma', 'Diploma'), ('Bachelor', 'Bachelor'), ('Master', 'Master'), ('PhD', 'PhD')], default='Certificate', max_length=50)),
                ('degree_provider', models.CharField(default='QBUK', max_length=255)),
                ('degree_name', models.CharField(default='Diploma in Nursing Assistant Level 4', max_length=255)),
                ('started_date', models.DateField()),
                ('completed_date', models.DateField()),
                ('awarded_date', models.DateField()),
                ('qr_code', models.ImageField(blank=True, null=True, upload_to='qr_codes/')),
                ('certificate_verification_number', models.CharField(max_length=50, unique=True)),
                ('candidate_number', models.CharField(max_length=50, unique=True)),
                ('batch_number', models.CharField(default='001', max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]