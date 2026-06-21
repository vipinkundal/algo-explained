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
    void append(int arrayAdtPrimaryValue)
    {
        if(arrayAdtTextLength<arrayAdtItemCapacity)
        {
            arrayAdtFirstItems[arrayAdtTextLength]=arrayAdtPrimaryValue;
            arrayAdtTextLength++;
        }
    }
 
    void display(){
        for (int arrayAdtScanIndex = 0; arrayAdtScanIndex < arrayAdtTextLength; arrayAdtScanIndex++){
            cout << arrayAdtFirstItems[arrayAdtScanIndex] << " ";
        }
    }
    void insert(int arrayAdtTargetIndex,int arrayAdtStoredValue){
        if(arrayAdtTargetIndex>=0 && arrayAdtTargetIndex<=arrayAdtItemCapacity){
        for(int arrayAdtScanIndex=arrayAdtTextLength;arrayAdtScanIndex>arrayAdtTargetIndex;arrayAdtScanIndex--)
        {
            arrayAdtFirstItems[arrayAdtScanIndex]=arrayAdtFirstItems[arrayAdtScanIndex-1];
        }
        arrayAdtFirstItems[arrayAdtTargetIndex]=arrayAdtStoredValue;
        arrayAdtTextLength++;
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
    arrayAdtItems.append(2);
    arrayAdtItems.insert(3,78);
    arrayAdtItems.display();
    

    return 0;
}