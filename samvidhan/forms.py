from django import forms
from .models import UserFeedback

class UserFeedbackForm(forms.ModelForm):
    class Meta:
        model = UserFeedback
        fields = ['name', 'experience', 'suggestions']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Your Name'}),
            'experience': forms.RadioSelect(attrs={'class': 'form-check-input'}),
            'suggestions': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Any suggestions for us?'}),
        }
