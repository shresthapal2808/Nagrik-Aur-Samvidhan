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
    # path('guess/', views.guess, name='guess'),
    # path('wheel/<str:article_name>/', views.wheel_article, name='wheel_article'),


    # path('quiz1/', views.quiz, name='quiz'),
    # path('spin_wheel/', views.spin_wheel, name='spin_wheel'),
    # path('board_game/', views.board_game, name='board_game'),
    # path('subscribe/', views.subscribe, name='subscribe'),
    #  path('quiz1/', views.quiz1, name='quiz1'),  # Add this line
    # path('quiz2/', views.quiz2, name='quiz2'),  # Add this line
    #  ,  # Add this line
    # path('contact/', views.contact, name='contact'),  # Add this line
    # path('privacy/', views.privacy, name='privacy'),  # Add this line
    # path('terms/', views.terms, name='terms'),  # Add this line
]
