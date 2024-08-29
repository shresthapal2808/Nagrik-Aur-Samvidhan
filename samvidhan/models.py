from django.db import models

class Preamble(models.Model):
    text = models.TextField()

class FundamentalRights(models.Model):
    ARTICLE_CHOICES = [
        ('14', 'Article 14: Equality Before Law'),
        ('15', 'Article 15: Prohibition of Discrimination'),
        ('16', 'Article 16: Equality of Opportunity in Public Employment'),
        ('17', 'Article 17: Abolition of Untouchability'),
        ('18', 'Article 18: Abolition of Titles'),
    ]
    
    article_number = models.CharField(max_length=3, choices=ARTICLE_CHOICES, unique=True)
    title = models.CharField(max_length=255)
    description = models.TextField()
    simplified_text = models.TextField()
    summary = models.TextField(blank=True, help_text="A brief summary or key points about the article.")

    def __str__(self):
        return f"{self.article_number}: {self.title}"
    
class FundamentalDuties(models.Model):
    duty_number = models.CharField(max_length=10)
    description = models.TextField()
    simplified_text = models.TextField()

    def __str__(self):
        return self.duty_number
    
class DirectivePrinciples(models.Model):
    article_number = models.CharField(max_length=10)
    title = models.CharField(max_length=255)
    description = models.TextField()
    simplified_text = models.TextField()

    def __str__(self):
        return self.article_number
    
class UserFeedback(models.Model):
    experience_choices = [
        ('Excellent', 'Excellent'),
        ('Good', 'Good'),
        ('Average', 'Average'),
        ('Poor', 'Poor'),
    ]

    name = models.CharField(max_length=100)
    experience = models.CharField(max_length=20, choices=experience_choices)
    suggestions = models.TextField(blank=True)

    def __str__(self):
        return self.name
    
