class Instructor:
    def __init__(self, name, place):
        self.name = name
        self.place = place
        self.followers = 0

    def display(self,subject):
        print(f"Hii I am {self.name} from {self.place} and I teach {subject}")

    def update_followers(self, follower_name):
        self.followers += 1

n1 = Instructor("Naman", "Bokaro")
print(n1.name)
print(n1.followers)

n1.display("Python")
n1.update_followers("Aryan")
print(n1.followers)

n2 = Instructor("Aryan", "Delhi")
print(n2.place)