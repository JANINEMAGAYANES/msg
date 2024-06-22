class Prescriptive:
    def __init__(self, value):
        self.value = value
        self.validate()

    def validate(self):
        if not isinstance(self.value, (int, float)):
            raise ValueError("Value must be an integer or float")
        if self.value < 0:
            raise ValueError("Value must be non-negative")

    def square(self):
        return self.value ** 2

    def cube(self):
        return self.value ** 3

    def describe(self):
        print(f"Value: {self.value}")
        print(f"Square: {self.square()}")
        print(f"Cube: {self.cube()}")