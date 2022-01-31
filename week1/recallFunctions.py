class Ghost:        # Create a class
    def __init__(self): # use __init__ to hold an empty list
        self.ghostList = []
    
    def printList(self):
        print(self.ghostList)
        
    # Create a function or functions that will allow you to add one of each of the following datatypes to your list: number,string,dictionary,tuple
    
    def addGhost(self, newGhost):
        self.ghostList.append(newGhost)
    
    def tupleList(self):
        self.ghostList = tuple(self.ghostList)

ghosts = Ghost()

ghosts.printList()
ghosts.addGhost('Poltergeist Polly')                        # String
ghosts.printList()
ghosts.addGhost(("Bloody Mary", "The Flying Dutchman"))     # Tuple
ghosts.printList()
ghosts.addGhost({'Ghost Name': 'Casper'})                   # Dictionary
ghosts.printList()
ghosts.addGhost(15)                                         # Number
ghosts.printList()
ghosts.tupleList()
ghosts.printList()