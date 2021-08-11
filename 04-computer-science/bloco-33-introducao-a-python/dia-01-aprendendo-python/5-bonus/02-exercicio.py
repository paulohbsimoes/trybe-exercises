import unittest


def get_right_triangle(base_length):
    triangle = []
    for count in range(base_length):
        triangle.append("*" * (count + 1))
    return "\n".join(triangle)


class TestGetRightTriangle(unittest.TestCase):
    def test_case_1(self):
        actual = get_right_triangle(5)
        expected = "*\n**\n***\n****\n*****"
        self.assertEqual(actual, expected)

    def test_case_2(self):
        actual = get_right_triangle(2)
        expected = "*\n**"
        self.assertEqual(actual, expected)

    def test_case_3(self):
        actual = get_right_triangle(0)
        expected = ""
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
