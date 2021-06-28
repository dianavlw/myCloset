from military_recruits import MilitaryRecruits

# military = MilitaryRecruits()

while True:
    mode = input("\nWhat would you like to do?\nOptions:\n1. View Recruits \n2. Add a Recruit\n3. Remove Recruit \n4. Find a recruit \n5. Quit\n")

    if mode == '1':
        recruit_id = input('Enter id:')
        recruit_string = str(MilitaryRecruits.find_recruit(recruit_id))
        print(recruit_string)

    # if mode == '1':
    #     print(MilitaryRecruits().list_recruits())

    elif mode == '2':
        recruit_data = {}
        recruit_data['id']      = input ('Enter recruit: ID: \n')
        recruit_data['first_name']      = input('Enter First Name:\n')
        recruit_data['last_name']       = input('Enter Last Name: \n')
        recruit_data['birthdate']       = input('Enter birthdate: \n')
        recruit_data['branch_of_service']       = input('Enter Branch Service: \n')
        recruit_data['education_level']       = input('Enter Education Level: \n')
        recruit_data['pay_grade']       = input('Enter Pay Grage: \n')
        recruit_data['closest_relative']       = input('Enter closest relative: \n')
        MilitaryRecruits().add_recruit(recruit_data)
    elif mode == '3': 
        id = input('Enter id:')
        MilitaryRecruits().delete_recruit(id)
    elif mode == '4':
        MilitaryRecruits().find_recruit_by_id()

    elif mode == '5':
        break
