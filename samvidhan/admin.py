from django.contrib import admin
from .models import Preamble, FundamentalRights, FundamentalDuties, DirectivePrinciples, UserFeedback

admin.site.register(Preamble)
admin.site.register(FundamentalRights)
admin.site.register(FundamentalDuties)
admin.site.register(DirectivePrinciples)
admin.site.register(UserFeedback)


