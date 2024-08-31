from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('games', views.games, name='games'),
    path('interactive learning', views.interactive_learning, name='learning'),
    path('about/', views.about, name='about'),
    path('preamble/', views.preamble, name='preamble'),
    path('fundamental-rights/', views.fundamental_rights, name='fundamental_rights'),
    path('fundamental-duties/', views.fundamental_duties, name='fundamental_duties'),
    path('directive-principles/', views.directive_principles, name='directive_principles'),
    path('memorycards/', views.memorycards, name='memorycards'),
    path('stages/', views.stages, name='stages'),
    path('feedback/', views.feedback, name='feedback'),
    path('thanks/', views.thanks, name='thanks'),
    path('wheel/', views.wheel, name='wheel'),
    path('guess/', views.guess, name='guess'),
    path('wheel/<str:article_name>/', views.wheel_article, name='wheel_article'),
]
