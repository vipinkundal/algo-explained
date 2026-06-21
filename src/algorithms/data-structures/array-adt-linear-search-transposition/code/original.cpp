#include <iostream>
using namespace std;
 
class ArrayAdtArrayModel{
 
private:
    int* arrayAdtFirstItems;
    int arrayAdtItemCapacity;
    int arrayAdtTextLength;
 
public:
    ArrayAdtArrayModel(int arrayAdtItemCapacity){
        this->arrayAdtItemCapacity = arrayAdtItemCapacity;
        arrayAdtFirstItems = new int [arrayAdtItemCapacity];
    }
 
    void create(){
        cout << "Enter number of elements: " << flush;
        cin >> arrayAdtTextLength;
        cout << "Enter the array elements: " << endl;
        for (int arrayAdtScanIndex = 0; arrayAdtScanIndex < arrayAdtTextLength; arrayAdtScanIndex++){
            cout << "Array element: " << arrayAdtScanIndex << " = " << flush;
            cin >> arrayAdtFirstItems[arrayAdtScanIndex];
        }
    }
 
    void display(){
        for (int arrayAdtScanIndex = 0; arrayAdtScanIndex < arrayAdtTextLength; arrayAdtScanIndex++){
            cout << arrayAdtFirstItems[arrayAdtScanIndex] << " ";
        }
        std::cout<<std::endl;
    }
    int l_search(int arrayAdtStoredValue)
    {
        for(int arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtTextLength;arrayAdtScanIndex++)
        {
            if(arrayAdtFirstItems[arrayAdtScanIndex]==arrayAdtStoredValue)
            {
                if(arrayAdtScanIndex>0)
                {
                    int arrayAdtSwapValue=arrayAdtFirstItems[arrayAdtScanIndex-1];//Transpose method to improve linear search
                    arrayAdtFirstItems[arrayAdtScanIndex-1]=arrayAdtFirstItems[arrayAdtScanIndex];
                    arrayAdtFirstItems[arrayAdtScanIndex]=arrayAdtSwapValue;
                }
                return arrayAdtScanIndex;
            }    
        }
        return -1;
    }
    ~ArrayAdtArrayModel(){//destructor
        delete[] arrayAdtFirstItems;
        cout << "Array destroyed" << endl;
    }
};

int main() {
 
    ArrayAdtArrayModel arrayAdtItems(10);
    arrayAdtItems.create();
    arrayAdtItems.display();
    cout<<"element found at index "<<arrayAdtItems.l_search(3)<<endl;
    arrayAdtItems.display();
    return 0;
}