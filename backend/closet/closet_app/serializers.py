from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from closet_app.models import User, Closet, Clothes


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'closet', 'password']
        depth = 1
    
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
            instance.save()
            return instance

class ClosetSerializer(serializers.ModelSerializer):
    # closet = serializers.StringRelatedField()
    class Meta:
        model = Closet
        # fields = ['clothes']
        fields = ['id', 'name', 'clothes']
        depth = 1

class ClothesSerializer(serializers.ModelSerializer):
    closet = serializers.StringRelatedField()
    closet_id = serializers.PrimaryKeyRelatedField(queryset=Closet.objects.all())
    class Meta:
        model = Clothes
        fields = ['clothing_name', 'closet', 'description', 'created_at']



    # class UserSerializerWithToken(serializers.ModelSeriliazer):

    #     token = serializers.SerializerMethodField()
    #     password = serializers.CharField(write_only=True)

    #     def get_token(self, obj):
    #         jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER 
    #         jwt_payload_handler = api_settings.JWT_ENCODE_HANDLER

    #         payload = jwt_payload_handler(obj)
    #         token = jwt_encode_handler(payload)

    #         return token







# from builtins import object
# from .models import Closet

# class ClosetSeriliazer(object):
#     def get_all(self, closets):
#         serialized_closets = {'closets': []}
#         for closets in closets:
#             serialized_closets["closets"].append(self.get(closet))
#         return serialized_closets

#     def get(self, closet):
#         serialize_closet = {
#             "id": closet.id,
#             "name": closet.name
#         }
#         return serialized_closet