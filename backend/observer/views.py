from rest_framework import viewsets
from django_filters import rest_framework as filters
from django_filters.filters import CharFilter
from .models import Video
from .serializers import VideoSerializer

def filter_in_csv(queryset, name, value):
    """
    Filter function to handle comma-separated values.
    """
    values = value.split(',')
    return queryset.filter(**{f'{name}__in': values})

class VideoFilter(filters.FilterSet):
    visit_type = CharFilter(field_name='visit_type', method=filter_in_csv)
    reason_for_visit = CharFilter(field_name='reason_for_visit', method=filter_in_csv)
    sentiment = CharFilter(field_name='sentiment', method=filter_in_csv)
    patient_age_category = CharFilter(field_name='patient_age_category', method=filter_in_csv)
    
    class Meta:
        model = Video
        fields = ['id', 'visit_type', 'reason_for_visit', 'sentiment', 'patient_age_category']

class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    filterset_class = VideoFilter
