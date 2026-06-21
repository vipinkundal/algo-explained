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
 
    void display(){
        for (int scanIndex = 0; scanIndex < textLength; scanIndex++){
            cout << firstItems[scanIndex] << " ";
        }
        std::cout<<std::endl;
    }
    void del(int targetIndex)
    {
        if(targetIndex>=0 && targetIndex<=textLength)
        {
            for(int scanIndex=targetIndex;scanIndex<textLength-1;scanIndex++)
            {
                firstItems[scanIndex]=firstItems[scanIndex+1];
            }
            textLength--;
            std::cout<<"deleted index "<<targetIndex<<" element in array"<<std::endl;
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
    items.display();
    items.del(3);
    items.display();

    
    

    return 0;
}