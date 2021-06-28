from django.shortcuts import render
from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from closet_app.models import User, Closet, Clothes
from closet_app.serializers import UserSerializer, ClosetSerializer, ClothesSerializer

class AllowAnyCreate(permissions.IsAuthenticated):
        def has_permission(self, request, view):
            if view.action == "create":
                return request.method == "POST"
            return super().has_permission(request, view)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    permission_classes = [AllowAnyCreate]
    

class ClosetViewSet(viewsets.ModelViewSet):
    # queryset = Closet.objects.all()
    serializer_class = ClosetSerializer
    def get_queryset(self):
        user = self.request.user
        print (user)
        return user.closet.all()
    def perform_create(self, serializer):
        # print("this happened")
        # return super().perform_create(serializer)
        serializer.save(user = self.request.user)


class ClothesViewSet(viewsets.ModelViewSet):
    queryset = Clothes.objects.all()
    serializer_class = ClothesSerializer



# from django.shortcuts import render, redirect
# from django.http import JsonResponse
# from closet_app.serializers import ClosetSeriliazer, ClothesSerializer
# from .models import Closet, Clothes
# from .forms import ClosetForm, ClothesForm


# def closets_list(request):
#     closets = Closet.objects.all()
#     serialized_clothes = ClothesSerializer().get_all(closets)
#     return JsonResponse(data=serialized_closets, status=200)


# def closet_detail(request, closet_id):
#     pass
    # closet = Closet.objects.get(id=closet_id)
    # return render(request, 'closet_detail.html', {'closet': closet})
    

# def new_closet(request):
#     pass
    # if request.method == 'POST':
    #     form = ClosetForm(request.POST)
    #     if form.is_valid():
    #         closet = form.save(commit=False)
    #         closet.save()
    #         return redirect('closet_detail', closet_id=closet.id)
    # else:
    #     form = ClosetForm()
    # return render(request, 'closet_form.html', {'form': form, 'type': 'New'})


# def edit_closet(request, closet_id):
#     pass
#     closet = Closet.objects.get(id=closet_id)
#     if request.method == 'POST':
#         form = ClosetForm(request.POST, instance=closet)
#         if form.is_valid():
#             closet = form.save(commit=False)
#             closet.save()
#             return redirect('closet_detail', closet_id=closet.id)
#     else:
#         form = ClosetForm(instance=closet)
#     return render(request, 'closet_form.html', {'form': form, 'type': 'Edit'})

# def delete_closet(request, closet_id):
#     if request.method == 'POST':
#         closet = Closet.objects.get(id=closet_id)
#         closet.delete()
#     return redirect('closets')


# post 
# def clothes_detail(request, closet_id, clothes_id):
#     closet = Closet.objects.get(id=closet_id)
#     clothes = Clothes.objects.get(id=clothes_id)
#     return render(request, 'clothes_detail.html', {'closet': closet, 'clothes': clothes})

# def new_clothes(request, closet_id):
#     closet = Closet.objects.get(id=closet_id)
#     if request.method == 'POST':
#         form = ClothesForm(request.POST)
#         if form.is_valid():
#             clothes= form.save(commit=False)
#             clothes.save()
#             return redirect('clothes_detail', closet_id=closet.id,clothes_id=clothes.id)
#     else:
#         form = ClothesForm(initial={'closet': closet})
#     return render(request, 'clothes_form.html', {'form': form, 'type': 'New'})

# def edit_clothes(request, closet_id, clothes_id):
#     closet = Closet.objects.get(id=closet_id)
#     clothes = Clothes.objects.get(id=clothes_id)
#     if request.method == 'POST':
#         form = ClothesForm(request.POST, instance=clothes)
#         if form.is_valid():
#             clothes = form.save(commit=False)
#             clothes.save()
#             return redirect('clothes_detail', closet_id=closet.id, clothes_id=clothes.id)
#     else:
#         form = ClothesForm(instance=clothes)
#     return render(request, 'clothes_form.html', {'form': form, 'type': 'Edit', 'closet': closet})

# def delete_clothes(request, closet_id, clothes_id):
#     if request.method == 'POST':
#         clothes = Clothes.objects.get(id=clothes_id)
#         clothes.delete()
#     return redirect('closet_detail', closet_id=closet_id)