# Generated by Django 2.0 on 2017-12-29 10:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('domains', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='status',
            field=models.CharField(choices=[('Doing', 'Doing'), ('Done', 'Done')], db_index=True, default='Doing', max_length=5),
        ),
        migrations.AlterField(
            model_name='todo',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
