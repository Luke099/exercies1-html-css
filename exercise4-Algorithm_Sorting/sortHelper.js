
class SortHelper {

	swap(array, i, j) {
		let tpm = array[i];
		array[i] = array[j];
		array[j] = tpm;
	}

	bubbleSort(array) {
		for (let i = 0; i < array.length - 1; i++) {
			let swapped = false;
			for (let j = 0; j < array.length - 1; j++) {
				if (array[j] > array[j + 1]) {
					this.swap(array, j, j + 1);
					swapped = true;
				}
			}
			if (!swapped) {
				break;
			}
		}
		console.log(`Bubble Sort: ${array}`);
	}

	customSort(array) {
		for (let i = 1; i < array.length; i++) {
			while (i > 0 && array[i - 1] > array[i]) {
				this.swap(array, i - 1, i);
				i -= 1;
			}
		}
		console.log(`Custom Sort: ${array}`);
	}

	insertionSort(array) {
		for (let i = 1; i < array.length; i++) {
			let valueToInsert = array[i];
			let holePosition = i;
			while (holePosition > 0 && array[holePosition - 1] > valueToInsert) {
				array[holePosition] = array[holePosition - 1];
				holePosition -= 1;
			}
			array[holePosition] = valueToInsert;
		}
		console.log(`Insertion Sort: ${array}`);
	}

	selectionSort(array) {
		for (let i = 0; i < array.length - 1; i++) {
			let min = i;
			for (let j = i + 1; j < array.length; j++) {
				if (array[min] > array[j]) {
					min = j;
				}
			}
			if (min !== i) {
				this.swap(array, i, min);
			}
		}
		console.log(`Selection Sort: ${array}`)
	}

	mergingForMergeSort(array, low, mid, high) {
		let l1;
		let l2;
		let i;
		let newArray = [];
		for (l1 = low, l2 = mid + 1, i = low; l1 <= mid && l2 <= high; i++) {
			if (array[l1] <= array[l2])
				newArray[i] = array[l1++];
			else {
				newArray[i] = array[l2++];
			}
		}
		while (l1 <= mid) {
			newArray[i++] = array[l1++];
		}
		while (l2 <= high) {
			newArray[i++] = array[l2++];
		}
		for (i = low; i <= high; i++) {
			array[i] = newArray[i]
		}
	}

	mergeSort(array, low, high) {
		let mid;
		if (low < high) {
			mid = parseInt((low + high) / 2);
			this.mergeSort(array, low, mid);
			this.mergeSort(array, mid + 1, high);
			this.mergingForMergeSort(array, low, mid, high);
		}
		else {
			return;
		}
	}

	shellSort(array) {
		let range = 1;
		while (range < array.length / 3) {
			range = parseInt(range * 3) + 1;
		}
		while (range > 0) {
			for (let outer = range; outer < array.length; outer++) {
				let tpm = array[outer];
				let inner = outer;
				while (inner > range - 1 && array[inner - range] >= tpm) {
					array[inner] = array[inner - range]
					inner = inner - range;
				}
				array[inner] = tpm;
			}
			range = parseInt(range - 1) / 3;
		}
		console.log(`Shell Sort: ${array}`);
	}

	quickSort(array, left, right) {
		let pivot = array[right];
		if (right <= left) {
			return;
		}
		else {
			let i = left; let j = right - 1;
			while (true) {
				while (array[i] < pivot) {
					i++;
				}
				while (array[j] >= pivot) {
					j--;
				}
				if (i >= j) {
					break;
				}
				else {
					this.swap(array, i, j);
					i += 1;
					j -= 1;
				}
			}
			this.swap(array, i, right);
			this.quickSort(array, 0, i - 1);
			this.quickSort(array, i + 1, right);
		}
	}

	partitionForQuickSort1(array, left, right, pivot) {
		let i = left;
		let j = right;
		while (true) {
			while (array[i] < pivot) {
				i++;
			}
			while (array[j] >= pivot) {
				j--;
			}
			if (i >= j) {
				break;
			}
			else {
				this.swap(array, i, j);
			}
		}
		this.swap(array, i, right)
		return i;
	}

	quickSort1(array, left, right) {
		if (right <= left) {
			return;
		}
		else {
			let pivot = array[right];
			let partition = this.partitionForQuickSort1(array, left, right, pivot);
			this.quickSort1(array, left, partition - 1);
			this.quickSort1(array, partition + 1, right)
		}
		console.log(array);
	}

	allSort(arrayInput) {
		this.bubbleSort([...arrayInput]);
		this.insertionSort([...arrayInput]);
		this.selectionSort([...arrayInput]);
		let array = [...arrayInput];
		this.mergeSort(array, 0, array.length - 1);
		console.log(`Merge Sort: ${array}`);
		this.shellSort([...arrayInput]);
		array = [...arrayInput];
		this.quickSort(array, 0, array.length - 1);
		console.log(`Quick Sort: ${array}`);
		this.customSort(arrayInput);
	}
}

const sortHelper = new SortHelper();
let array = [3, 40, 6, 20, 1, 4, 7, 5, 9, 40, 2];
sortHelper.allSort(array);


