from rest_framework import serializers
from .models import Video

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'visit_type', 'reason_for_visit', 'sentiment', 'patient_age_category']
