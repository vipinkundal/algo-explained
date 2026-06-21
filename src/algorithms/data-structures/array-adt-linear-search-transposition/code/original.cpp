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
    int l_search(int storedValue)
    {
        for(int scanIndex=0;scanIndex<textLength;scanIndex++)
        {
            if(firstItems[scanIndex]==storedValue)
            {
                if(scanIndex>0)
                {
                    int swapValue=firstItems[scanIndex-1];//Transpose method to improve linear search
                    firstItems[scanIndex-1]=firstItems[scanIndex];
                    firstItems[scanIndex]=swapValue;
                }
                return scanIndex;
            }    
        }
        return -1;
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
    cout<<"element found at index "<<items.l_search(3)<<endl;
    items.display();
    return 0;
}