from rest_framework import viewsets
from django_filters import rest_framework as filters
from .models import Video
from .serializers import VideoSerializer

class VideoFilter(filters.FilterSet):
    class Meta:
        model = Video
        fields = ['id', 'visit_type', 'reason_for_visit', 'sentiment', 'patient_age_category']

"E.g.: to get all videos with visit type 'Video + Audio', you can make a GET request to /api/videos?visit_type=VA."


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    filterset_class = VideoFilter
