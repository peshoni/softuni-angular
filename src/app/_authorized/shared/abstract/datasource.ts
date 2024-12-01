import { DataSource } from "@angular/cdk/collections";
import { signal } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { QueryRef } from "apollo-angular";
/**
 * Common properties for all inheritors of DataSource
 */
export abstract class CustomDataSource<T,K> extends DataSource<T>{
    aggregateCount = signal(0);
    loading = signal(true);
    paginator!: MatPaginator;
    sort!: MatSort;
    queryRef!: QueryRef<K>;
}