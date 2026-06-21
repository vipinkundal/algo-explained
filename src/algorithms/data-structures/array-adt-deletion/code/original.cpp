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
    void del(int arrayAdtTargetIndex)
    {
        if(arrayAdtTargetIndex>=0 && arrayAdtTargetIndex<=arrayAdtTextLength)
        {
            for(int arrayAdtScanIndex=arrayAdtTargetIndex;arrayAdtScanIndex<arrayAdtTextLength-1;arrayAdtScanIndex++)
            {
                arrayAdtFirstItems[arrayAdtScanIndex]=arrayAdtFirstItems[arrayAdtScanIndex+1];
            }
            arrayAdtTextLength--;
            std::cout<<"deleted index "<<arrayAdtTargetIndex<<" element in array"<<std::endl;
        }    
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
    arrayAdtItems.del(3);
    arrayAdtItems.display();

    
    

    return 0;
}