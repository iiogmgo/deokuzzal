from django.http import HttpResponse
from django.template import loader


def index(request):
    template = loader.get_template('deokuzzal/theme-1.html')
    context = {}
    return HttpResponse(template.render(context, request))
