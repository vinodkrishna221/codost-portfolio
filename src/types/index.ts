/**
 * Shared TypeScript types and interfaces.
 * Add your application-wide types here.
 */

/** Generic API response wrapper */
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

/** Pagination metadata */
export interface PaginationMeta {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

/** Paginated API response */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: PaginationMeta;
}

/** Base entity with common fields */
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}
