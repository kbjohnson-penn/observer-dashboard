from django.core.management.base import BaseCommand
from observer.models import Video
import random

class Command(BaseCommand):
    help = 'Create random videos'

    def handle(self, *args, **options):
        VISIT_TYPE_CHOICES = ['VA', 'A', 'T', 'ETC']
        REASON_FOR_VISIT_CHOICES = ['PC', 'GC', 'O']
        SENTIMENT_CHOICES = ['P', 'N', 'NE']
        AGE_CATEGORY_CHOICES = ['C', 'A', 'AD', 'S']

        for _ in range(100):
            Video.objects.create(
                visit_type=random.choice(VISIT_TYPE_CHOICES),
                reason_for_visit=random.choice(REASON_FOR_VISIT_CHOICES),
                sentiment=random.choice(SENTIMENT_CHOICES),
                patient_age_category=random.choice(AGE_CATEGORY_CHOICES),
            )

        self.stdout.write(self.style.SUCCESS('Successfully created random videos'))
