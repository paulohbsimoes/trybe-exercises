import unittest

triangles = {1: "Equilátero", 2: "Isósceles", 3: "Escaleno"}


def get_triangle_type(triangle):
    a, b, c = triangle

    if a > b + c or b > a + c or c > a + b:
        return "Not a triangle"

    unique_length_sides = set([a, b, c])

    return triangles[len(unique_length_sides)]


class TestGetTriangleType(unittest.TestCase):
    def test_not_a_triangle_a(self):
        not_a_triangle = (10, 2, 3)
        self.assertEqual(get_triangle_type(not_a_triangle), "Not a triangle")

    def test_not_a_triangle_b(self):
        not_a_triangle = (10, 20, 3)
        self.assertEqual(get_triangle_type(not_a_triangle), "Not a triangle")

    def test_not_a_triangle_c(self):
        not_a_triangle = (10, 4, 33)
        self.assertEqual(get_triangle_type(not_a_triangle), "Not a triangle")

    def test_equilatero(self):
        equilatero = (2, 2, 2)
        self.assertEqual(get_triangle_type(equilatero), "Equilátero")

    def test_isosceles(self):
        isosceles = (2, 2, 3)
        self.assertEqual(get_triangle_type(isosceles), "Isósceles")

    def test_escaleno(self):
        escaleno = (1, 2, 3)
        self.assertEqual(get_triangle_type(escaleno), "Escaleno")


if __name__ == "__main__":
    unittest.main()
