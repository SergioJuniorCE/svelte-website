from django.contrib import admin
from django.urls import path, include

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    # Django
    path('admin/', admin.site.urls),
    # Third party
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view()),
    path('api/toke/refresh/', TokenRefreshView.as_view()),
    # Own
    path('api/users/', include('users.urls')),
    path('api/todos/', include('todos.urls')),
    path('api/expenses/', include('expenses.urls')),
]
