#Write these methods for Singly Linked Lists:

#Add a value to the front of a singly linked list
#Add a value to the back of a singly linked list
#Display a singly linked list
#Return true or false whether a value is inside a singly linked list

#Starter code:
class SLL:
    def __init__(self):
        self.head = None
    
    def addToFront(self, node):
        if self.head == None:
            self.head = node
        else:
            node.next = self.head
            self.head = node
        

    def addToBack(self, node):
        runner = self.head
        while runner.next != None:
            runner = runner.next
        runner.next = node

    def displayList(self):
        runner = self.head
        print(runner.value)
        while runner.next is not None:
            # print(runner.value)
            runner = runner.next
            print(runner.value)

    def removeFromFront(self):
        self.head = self.head.next

    def removeFromBack(self):
        runner = self.head
        while runner.next.next is not None:
            runner = runner.next
        runner.next = None

    def maxtoBack(self):
        runner = self.head
        premax = self.head
        # print(runner.value)
        max = self.head

        # print(runner.value)
        while runner.next is not None:
            if runner.value > max.value:
                prevmax = max
                runner.next = max
                # print(prevmax.value)
                # print(max.value)
            runner = runner.next
        runner.next = max
        prevmax.next.next = prevmax.next
        runner = self.head


    def mintoFront(self):
        runner = self.head
        min = runner

            

    def rev_list(self):
        prev = None
        runner = self.head
        while runner:
            nxt = runner.next
            runner.next = prev
            prev = runner
            runner = nxt
        self.head = prev
        return self

    def remove_negative(self):
        #set a variable to move through the list
        runner = self.head
        #set a variable to move through the list, keeping track of the node before the runner
        prev = None
        #create a loop to move the runner and the previous node through the list
        while runner.next:
            #set a variable tat moves within the loop with the runner and keeps track of the node after
            nxt = runner.next
            #move the variable of (prev) into the position of runner
            prev = runner
            #move the runner to the position of the (nxt) variable
            runner = nxt
            # print(runner.value)
            if runner.value < 0:
                #if the value of the current node is less than zero
                # move the nxt variable to the position of the node after runner
                # positions become : Prev -> Runner -> Nxt
                nxt = runner.next 
                #set the direction of the 'next' attribute to point to the positon of the nxt variable
                # position: (Prev -> Nxt) and (Runner -> Nxt)
                prev.next = nxt
                #remove the runner from the list by setting its 'next' attribute equal to Null or None
                runner.next = None
        return self



    # def prepend(self, key_1, key_2): #key_1 = target node, key_2 is the node that we are adding before key_1
    #     #Set a variable to move through the SLL (runner)
    #     #set avariable to keep track of the value of the node before the runner (prev)
    #     #set a variable to keep track of the value after the runner (nxt)
    #     runner = self.head
    #     prev = self.head
    #     nxt = runner.next
    #     # loop through the SLL until the value after runner is None

    #     while runner != key_1: #while runner.next is not None:
    #         #set the runner to be the next node in the list and set prev to be the node before runner
    #         runner = runner.next
    #         prev.next = runner
    #         nxt = runner.next
            
    #         if key_1:
    #             prev.next = key_2
    #             key_2.next = key_1
    #             key_1.next = nxt
    #             return self
            




        
            



        
            


    #Function to add to front
    #Function to add to back
    #Function to display list
    #Function to see if a value is in the list

class Node:
    def __init__(self, val):
        self.value = val
        self.next = None

n1 = Node(10)
n2 = Node(7)
n3 = Node(3)
n4 = Node(8)
n5 = Node(-5)

list1 = SLL()
list1.addToFront(Node(3))
list1.addToBack(Node(7))
list1.addToBack(n5)
list1.addToBack(Node(10))
list1.addToBack(Node(8))

# list1.rev_list()

list1.displayList()
print("End of old list")
list1.remove_negative()
list1.displayList()









# create my first SLL
