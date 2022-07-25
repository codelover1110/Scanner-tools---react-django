import imp
from django.contrib import admin
from django.urls import path , re_path, include
from backend.views import user,screenlist, frontend
from rest_framework import routers


# from core.views import front


router = routers.DefaultRouter()

# router.register(r'users', user.UserViewSet)
# router.register(r'screenlist', screenlist.ScreenlistViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),    
    re_path(r'^api/screenlist/$', screenlist.ScreenlistViewSet.screen_list, name="screenlist"),
    re_path(r'^api/screenlist/add/$', screenlist.ScreenlistViewSet.screen_list, name="screenlist"),
    re_path(r'^api/screenoption/$', screenlist.ScreenoptionViewSet.screen_option, name="screenoption"),
    re_path(r'^api/screenoption/add/$', screenlist.ScreenoptionViewSet.screen_option, name="screenoption"),
    re_path(r'^api/screenresult/$', screenlist.ScreenresultViewSet.screen_result, name="screenresult"),
    re_path(r'', frontend.front, name="front"),
    # path('', include('core.urls'), name='index')
]