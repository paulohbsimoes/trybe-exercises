from functools import reduce
import unittest


def smallest(numbers):
    return reduce(
        lambda smallest, num: num if num < smallest else smallest, numbers
    )


class TestSmallest(unittest.TestCase):
    def test_case_1(self):
        actual = smallest([1, 10, 40])
        expected = 1
        self.assertEqual(actual, expected)

    def test_case_2(self):
        actual = smallest([10, 1, 40])
        expected = 1
        self.assertEqual(actual, expected)

    def test_case_3(self):
        actual = smallest([-10, 0, 1, 40, 100])
        expected = -10
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
