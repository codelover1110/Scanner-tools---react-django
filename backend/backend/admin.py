
from django.contrib import admin
# from backend.models.screenlist import Screenlist
# from backend.models.screenlist import Screenoption

# Register your models here
# admin.site.register(News)
admin.site.site_header = "Django Tutorials"

class SiteManageAdmin(admin.ModelAdmin):
    list_display = ('Site_Status', 'Under_Maintainance_Message')
