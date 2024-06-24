from django.db import models

class cal(models.Model):
    count=models.IntegerField(default=10)
    
    def __str__ (self):
        return str(self.count)
