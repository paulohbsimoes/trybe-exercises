import unittest

fuel = {
    "A": {"name": "Álcool", "price": 1.9},
    "G": {"name": "Gasolina", "price": 2.5},
}


def get_bill(fuel_type, amount_in_liters):
    price = fuel[fuel_type]["price"]
    return amount_in_liters * price


class TestGetBill(unittest.TestCase):
    def test_case_1(self):
        actual = get_bill("A", 10)
        expected = 19
        self.assertEqual(actual, expected)

    def test_case_2(self):
        actual = get_bill("G", 10)
        expected = 25
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
