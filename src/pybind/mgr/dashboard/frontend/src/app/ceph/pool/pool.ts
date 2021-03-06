import { ExecutingTask } from '../../shared/models/executing-task';

export class Pool {
  cache_target_full_ratio_micro: number;
  fast_read: boolean;
  stripe_width: number;
  flags_names: string;
  tier_of: number;
  hit_set_grade_decay_rate: number;
  pg_placement_num: number;
  use_gmt_hitset: boolean;
  last_force_op_resend_preluminous: string;
  quota_max_bytes: number;
  erasure_code_profile: string;
  expected_num_objects: number;
  size: number;
  snap_seq: number;
  auid: number;
  cache_min_flush_age: number;
  hit_set_period: number;
  min_read_recency_for_promote: number;
  target_max_objects: number;
  pg_num: number;
  type: string;
  grade_table: any[];
  pool_name: string;
  cache_min_evict_age: number;
  snap_mode: string;
  cache_mode: string;
  min_size: number;
  cache_target_dirty_high_ratio_micro: number;
  object_hash: number;
  application_metadata: string[];
  write_tier: number;
  cache_target_dirty_ratio_micro: number;
  pool: number;
  removed_snaps: string;
  cdExecuting?: string;
  executingTasks?: ExecutingTask[];
  crush_rule: string;
  tiers: any[];
  hit_set_params: {
    type: string;
  };
  last_force_op_resend: string;
  pool_snaps: any[];
  quota_max_objects: number;
  options: {
    compression_algorithm?: string;
    compression_max_blob_size?: number;
    compression_min_blob_size?: number;
    compression_mode?: string;
    compression_required_ratio?: number;
  };
  hit_set_count: number;
  flags: number;
  target_max_bytes: number;
  snap_epoch: number;
  hit_set_search_last_n: number;
  last_change: string;
  min_write_recency_for_promote: number;
  read_tier: number;

  constructor(name) {
    this.pool_name = name;
  }
}
