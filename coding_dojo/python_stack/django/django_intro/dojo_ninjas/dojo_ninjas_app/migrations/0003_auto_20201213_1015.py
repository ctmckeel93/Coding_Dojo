# Generated by Django 2.2.4 on 2020-12-13 15:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dojo_ninjas_app', '0002_dojos_desc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ninjas',
            name='dojo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ninja', to='dojo_ninjas_app.dojos'),
        ),
    ]