from rest_framework import viewsets
from django_filters import rest_framework as filters
from .models import Video
from .serializers import VideoSerializer

class VideoFilter(filters.FilterSet):
    class Meta:
        model = Video
        fields = ['visit_type', 'reason_for_visit', 'sentiment', 'patient_age_category']

class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    filterset_class = VideoFilter
