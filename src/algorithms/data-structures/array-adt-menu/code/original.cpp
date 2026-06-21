#include <iostream>
using namespace std;

template<class ArrayAdtT>
class ArrayAdtArrayModel{
private:
    ArrayAdtT * arrayAdtFirstItems;
    int arrayAdtItemCapacity;
    int arrayAdtTextLength;
public:
    ArrayAdtArrayModel()
    {
        arrayAdtItemCapacity=10;
        arrayAdtTextLength=0;
        arrayAdtFirstItems=new ArrayAdtT[arrayAdtItemCapacity];

    }
    ArrayAdtArrayModel(int arrayAdtItemCapacity)
    {
        this->arrayAdtItemCapacity=arrayAdtItemCapacity;
        arrayAdtTextLength=0;
        arrayAdtFirstItems=new ArrayAdtT[arrayAdtItemCapacity];

    }
    void insert(int arrayAdtTargetIndex,ArrayAdtT arrayAdtStoredValue){
        if(arrayAdtTargetIndex>=0 && arrayAdtTargetIndex<=arrayAdtItemCapacity){
        for(int arrayAdtScanIndex=arrayAdtTextLength;arrayAdtScanIndex>arrayAdtTargetIndex;arrayAdtScanIndex--)
        {
            arrayAdtFirstItems[arrayAdtScanIndex]=arrayAdtFirstItems[arrayAdtScanIndex-1];
        }
        arrayAdtFirstItems[arrayAdtTargetIndex]=arrayAdtStoredValue;
        arrayAdtTextLength++;
        }
    }
    void append(ArrayAdtT arrayAdtInputValue){
        if(arrayAdtTextLength<arrayAdtItemCapacity)
        {
            arrayAdtFirstItems[arrayAdtTextLength]=arrayAdtInputValue;
            arrayAdtTextLength++;
        }
    }
    
    void display(){
        for (int arrayAdtScanIndex = 0; arrayAdtScanIndex < arrayAdtTextLength; arrayAdtScanIndex++){
            std::cout<<arrayAdtFirstItems[arrayAdtScanIndex] << " ";
        }
    }
    int l_search(ArrayAdtT arrayAdtStoredValue)
    {
        for(int arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtTextLength;arrayAdtScanIndex++)
        {
            if(arrayAdtFirstItems[arrayAdtScanIndex]==arrayAdtStoredValue)
            {
                return arrayAdtScanIndex;
            }
        }
        return -1;
    }
    void deletion(int arrayAdtTargetIndex)
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
    ArrayAdtT Sum()
    {
        ArrayAdtT arrayAdtState3=0;
        for(int arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtTextLength;arrayAdtScanIndex++)
            arrayAdtState3=arrayAdtState3+arrayAdtFirstItems[arrayAdtScanIndex];
        return arrayAdtState3;
    }

    ArrayAdtArrayModel* Union(ArrayAdtArrayModel);

    ~ArrayAdtArrayModel()
    {
        delete []arrayAdtFirstItems;
    }
    
};
template<class ArrayAdtT>
ArrayAdtArrayModel<ArrayAdtT>* ArrayAdtArrayModel<ArrayAdtT>::Union(ArrayAdtArrayModel<ArrayAdtT> arrayAdtState)
{
    ArrayAdtArrayModel* arrayAdtState2=new ArrayAdtArrayModel[10];
    int arrayAdtScanIndex=0,arrayAdtWriteIndex=0,arrayAdtProbeIndex=0,arrayAdtColumnCount=0;
    for(arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtTextLength;arrayAdtScanIndex++,arrayAdtProbeIndex++)
        arrayAdtState2->arrayAdtFirstItems[arrayAdtProbeIndex]=arrayAdtFirstItems[arrayAdtScanIndex];
    for(arrayAdtScanIndex=0;arrayAdtScanIndex<arrayAdtState.arrayAdtTextLength;arrayAdtScanIndex++)
        {
            int arrayAdtLeftIndex=0,arrayAdtWriteIndex=0;
            while(arrayAdtWriteIndex<arrayAdtTextLength)
            {
                if(arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex]==arrayAdtFirstItems[arrayAdtWriteIndex])
                {
                    arrayAdtLeftIndex=1;
                    break;
                }
                arrayAdtWriteIndex++;

            }
            if(arrayAdtLeftIndex==0)
                arrayAdtState2->arrayAdtFirstItems[arrayAdtProbeIndex++]=arrayAdtState.arrayAdtFirstItems[arrayAdtScanIndex];
        }
        arrayAdtState2->arrayAdtTextLength=arrayAdtProbeIndex;
        arrayAdtState2->arrayAdtItemCapacity=100;
        return arrayAdtState2;
    }



int main() {
    int arrayAdtScanIndex,arrayAdtState4;
    int arrayAdtInputValue;
    cout<<"Enter size of array ";
    cin>>arrayAdtState4;
    ArrayAdtArrayModel<int> arrayAdtItems(arrayAdtState4);
    int arrayAdtCurrentChar;
    do{
        cout<<"\nMenu\n";
        cout<<"1.Append\n";
        cout<<"2.Insert\n";
        cout<<"3.Search\n";
        cout<<"4.Sum\n";
        cout<<"5.Display\n";
        cout<<"6.Delete\n";
        cout<<"7.Exit\n";

        cin>>arrayAdtCurrentChar;
        switch(arrayAdtCurrentChar)
        {
            case 1:
                cout<<"Enter element to appended\n";
                cin>>arrayAdtInputValue;
                arrayAdtItems.append(arrayAdtInputValue);
                break;

            case 2:
                cout<<"Enter element to be inserted\n";
                cin>>arrayAdtInputValue;
                cout<<"Enter position of element\n";
                cin>>arrayAdtScanIndex;
                arrayAdtItems.insert(arrayAdtScanIndex,arrayAdtInputValue);
                break;

            case 3:
                cout<<"Enter element to be searched\n";
                cin>>arrayAdtInputValue;
                arrayAdtScanIndex=arrayAdtItems.l_search(arrayAdtInputValue);
                if(arrayAdtScanIndex==-1)
                    cout<<"Element not found\n";
                else
                    cout<<"Element found at "<<arrayAdtScanIndex<<" position ";
                break;

            case 4:
                cout<<"Sum of array elements is "<<arrayAdtItems.Sum();
                break;

            case 5:
                arrayAdtItems.display();
                break;

            case 6:
                cout<<"Enter index at which elements will be deleted\n";
                cin>>arrayAdtScanIndex;
                arrayAdtItems.deletion(arrayAdtScanIndex);
                break;

        }
    }while(arrayAdtCurrentChar<7);

    ArrayAdtArrayModel<int> arrayAdtSecondItems(10);
    arrayAdtSecondItems.append(4);
    arrayAdtSecondItems.append(5);
    arrayAdtSecondItems.append(6);
    ArrayAdtArrayModel<int> *arrayAdtMergedItems=arrayAdtItems.Union(arrayAdtSecondItems);
    arrayAdtMergedItems->display();

    return 0;
}