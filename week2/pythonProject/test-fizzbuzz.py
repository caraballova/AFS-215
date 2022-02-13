import pytest
from fizzBuzz import *

def test_fizz():
    assert fizzbuzz(1)
    assert fizzbuzz(2) == '2'
    assert fizzbuzz(3) == 'Pepsi'
    assert fizzbuzz(5) == 'Coke'
    assert fizzbuzz(6) == 'Pepsi'
    assert fizzbuzz(10) == 'Coke'
    assert fizzbuzz(15) == 'PepsiCoke'