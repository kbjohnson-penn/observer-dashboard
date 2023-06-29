from django.db import models

class Video(models.Model):
    VISIT_TYPE_CHOICES = [
        ('VA', 'Video + Audio'),
        ('A', 'Audio'),
        ('T', 'Transcript'),
        ('ETC', 'Others'),
    ]
    REASON_FOR_VISIT_CHOICES = [
        ('PC', 'Primary Care'),
        ('GC', 'Genetics Consult'),
        ('O', 'Other'),
    ]
    SENTIMENT_CHOICES = [
        ('P', 'Positive'),
        ('N', 'Negative'),
        ('NE', 'Neutral'),
    ]
    AGE_CATEGORY_CHOICES = [
        ('C', 'Child'),
        ('A', 'Adolescent'),
        ('AD', 'Adult'),
        ('S', 'Senior'),
    ]
    DATA_SOURCE_CHOICES = [
        ('SI', 'Simulated'),
        ('SY', 'Synthesized'),
        ('R', 'Real Patient/Real Doctor'),
    ]

    visit_type = models.CharField(max_length=3, choices=VISIT_TYPE_CHOICES)
    data_source = models.CharField(max_length=2, choices=DATA_SOURCE_CHOICES)
    reason_for_visit = models.CharField(max_length=2, choices=REASON_FOR_VISIT_CHOICES)
    sentiment = models.CharField(max_length=2, choices=SENTIMENT_CHOICES)
    patient_age_category = models.CharField(max_length=2, choices=AGE_CATEGORY_CHOICES)