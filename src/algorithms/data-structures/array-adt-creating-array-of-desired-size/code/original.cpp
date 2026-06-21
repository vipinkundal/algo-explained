#include <iostream>
using namespace std;
 
class Array{
 
private:
    int* firstItems;
    int itemCapacity;
    int textLength;
 
public:
    Array(int itemCapacity){
        this->itemCapacity = itemCapacity;
        firstItems = new int [itemCapacity];
    }
 
    void create(){
        cout << "Enter number of elements: " << flush;
        cin >> textLength;
        cout << "Enter the array elements: " << endl;
        for (int scanIndex = 0; scanIndex < textLength; scanIndex++){
            cout << "Array element: " << scanIndex << " = " << flush;
            cin >> firstItems[scanIndex];
        }
    }
    void append(int primaryValue)
    {
        if(textLength<itemCapacity)
        {
            firstItems[textLength]=primaryValue;
            textLength++;
        }
    }
 
    void display(){
        for (int scanIndex = 0; scanIndex < textLength; scanIndex++){
            cout << firstItems[scanIndex] << " ";
        }
    }
    void insert(int targetIndex,int storedValue){
        if(targetIndex>=0 && targetIndex<=itemCapacity){
        for(int scanIndex=textLength;scanIndex>targetIndex;scanIndex--)
        {
            firstItems[scanIndex]=firstItems[scanIndex-1];
        }
        firstItems[targetIndex]=storedValue;
        textLength++;
        }
    }
 
    ~Array(){//destructor
        delete[] firstItems;
        cout << "Array destroyed" << endl;
    }
};

int main() {
 
    Array items(10);
    items.create();
    items.append(2);
    items.insert(3,78);
    items.display();
    

    return 0;
}