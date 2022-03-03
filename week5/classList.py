import pytest

class listTest:
    def __init__(self):
        self.newList = []                               # Place a string into a list
    
    def addToList(self,item):
        self.newList.append(item)
        return self.newList
    
    def listSearch(self, item):                         # Search the list for a single instance of a string
        for i in self.newList:
            if item == i:
                return i

x = listTest()
print(x.newList)                                       # Evaluate all items in the list

x.addToList('hello')
print(x.newList)

x.addToList('world')
print(x.newList)

x.addToList('goodbye')
print(x.newList)
print(x.listSearch('world'))

@pytest.fixture

def x():
    x = listTest()
    return x

def testCanAddList(x):
    x.addToList('hello')
    assert x.listSearch('hello') == True
    
def testCanSearchList(x):
    x.addToList("love")
    x.addToList("bug")
    assert x.listSearch('bug') == True
