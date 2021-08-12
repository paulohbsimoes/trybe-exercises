import unittest
from functools import reduce


def get_sequence_sum(nth_number):
    numbers = [x + 1 for x in range(nth_number)]
    return reduce(lambda total, x: total + x, numbers)


class TestSequenceSum(unittest.TestCase):
    def test_case_1(self):
        actual = get_sequence_sum(3)
        expected = 6
        self.assertEqual(actual, expected)

    def test_case_2(self):
        actual = get_sequence_sum(10)
        expected = 55
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
